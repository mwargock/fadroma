<?php
// APLIKACJA FADROMY - System Ewidencji Ładowarek
// Frontend (React) korzystający z bazy MySQL przez api.php
header('Content-Type: text/html; charset=utf-8');
// Strona zawsze świeża - po aktualizacji przeglądarka pobierze nowy app.js
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
$v = @filemtime(__DIR__ . '/assets/app.js') ?: time();
?><!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APLIKACJA FADROMY - System Ewidencji Ładowarek</title>
        <style>
            .error-boundary {
                border: 2px dashed rgba(255, 0, 0, 0.3);
                position: relative;
            }
            .error-boundary::after {
                content: "⚠️";
                position: absolute;
                top: 0;
                right: 0;
                background: rgba(255, 0, 0, 0.1);
                color: red;
                font-size: 14px;
                padding: 2px 6px;
                border-radius: 0 0 0 4px;
                pointer-events: none;
            }
            .loading-spinner {
                @apply flex items-center justify-center;
                @apply min-h-[200px];
                @apply bg-gradient-to-br from-white/5 to-white/10;
                @apply rounded-xl;
                @apply backdrop-blur-sm;
            }
            .loading-spinner::after {
                content: '';
                @apply w-12 h-12;
                @apply border-4 border-primary/20;
                @apply border-t-primary;
                @apply rounded-full;
                @apply animate-spin;
                @apply shadow-lg;
            }

            /* Base text and background colors for all elements */
            body {
                @apply bg-background text-foreground;
            }

            /* Form elements styling */
            input, textarea, select {
                @apply bg-background text-foreground border-input;
                @apply placeholder:text-muted-foreground;
                @apply focus:outline-none focus:ring-2 focus:ring-ring;
            }

            /* Handle filled state */
            input:not(:placeholder-shown),
            textarea:not(:placeholder-shown),
            select:not(:placeholder-shown) {
                @apply bg-background;
            }

            /* Ensure proper contrast in both modes */
            .dark input, .dark textarea, .dark select {
                @apply bg-background/95;
            }

            input, textarea, select {
                @apply bg-background/95;
            }

            /* Handle disabled state */
            input:disabled,
            textarea:disabled,
            select:disabled {
                @apply opacity-50 cursor-not-allowed;
            }

            /* Button styling */
            button {
                @apply bg-primary text-primary-foreground hover:bg-primary/90;
                @apply disabled:opacity-50 disabled:cursor-not-allowed;
                @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
            }

            /* Secondary button variant */
            button.secondary {
                @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
            }

            /* Card styling */
            .card {
                @apply bg-card text-card-foreground;
                @apply border border-border;
                @apply rounded-lg shadow-sm;
            }

            /* Popover and dropdown styling */
            .popover {
                @apply bg-popover text-popover-foreground;
                @apply border border-border;
                @apply shadow-md rounded-md;
            }

            /* Link styling */
            a {
                @apply text-primary hover:text-primary/80;
                @apply focus:outline-none focus:ring-2 focus:ring-ring;
            }

            /* Muted text */
            .text-muted {
                @apply text-muted-foreground;
            }

            /* Accent backgrounds */
            .bg-accent {
                @apply bg-accent text-accent-foreground;
            }

            /* Destructive elements */
            .destructive {
                @apply bg-destructive text-destructive-foreground hover:bg-destructive/90;
            }

            /* Code blocks and pre elements */
            pre, code {
                @apply bg-muted text-muted-foreground;
                @apply rounded px-[0.3em] py-[0.2em];
            }

            /* Table styling */
            table {
                @apply border-collapse w-full;
            }

            th, td {
                @apply border border-border;
                @apply p-2 text-left;
            }

            th {
                @apply bg-muted font-semibold;
            }

            /* Badge/tag styling */
            .badge {
                @apply inline-flex items-center rounded-full;
                @apply px-2.5 py-0.5 text-xs font-semibold;
                @apply bg-primary/10 text-primary-foreground;
            }

            /* Focus outline for accessibility */
            :focus-visible {
                @apply outline-none ring-2 ring-ring ring-offset-2;
            }

            /* Selection styling */
            ::selection {
                @apply bg-primary/20 text-foreground;
            }
        </style>

        <!-- Styles -->
        <style>
            :root {
                --background: 0 0% 100%;
                --foreground: 222.2 84% 4.9%;
                --card: 0 0% 100%;
                --card-foreground: 222.2 84% 4.9%;
                --popover: 0 0% 100%;
                --popover-foreground: 222.2 84% 4.9%;
                --primary: 222.2 47.4% 11.2%;
                --primary-foreground: 210 40% 98%;
                --secondary: 210 40% 96.1%;
                --secondary-foreground: 222.2 47.4% 11.2%;
                --muted: 210 40% 96.1%;
                --muted-foreground: 215.4 16.3% 46.9%;
                --accent: 210 40% 96.1%;
                --accent-foreground: 222.2 47.4% 11.2%;
                --destructive: 0 84.2% 60.2%;
                --destructive-foreground: 210 40% 98%;
                --border: 214.3 31.8% 91.4%;
                --input: 214.3 31.8% 91.4%;
                --ring: 222.2 84% 4.9%;
                --radius: 0.5rem;
            }
            .dark {
                --background: 222.2 84% 4.9%;
                --foreground: 210 40% 98%;
                --card: 222.2 84% 4.9%;
                --card-foreground: 210 40% 98%;
                --popover: 222.2 84% 4.9%;
                --popover-foreground: 210 40% 98%;
                --primary: 210 40% 98%;
                --primary-foreground: 222.2 47.4% 11.2%;
                --secondary: 217.2 32.6% 17.5%;
                --secondary-foreground: 210 40% 98%;
                --muted: 217.2 32.6% 17.5%;
                --muted-foreground: 215 20.2% 65.1%;
                --accent: 217.2 32.6% 17.5%;
                --accent-foreground: 210 40% 98%;
                --destructive: 0 62.8% 30.6%;
                --destructive-foreground: 210 40% 98%;
                --border: 217.2 32.6% 17.5%;
                --input: 217.2 32.6% 17.5%;
                --ring: 212.7 26.8% 83.9%;
            }
        </style>
        <script src="assets/vendor/tailwindcss.js"></script>
        <script>
            tailwind.config = {
                darkMode: ["class"],
                theme: {
                    container: {
                        center: true,
                        padding: "2rem",
                        screens: {
                            "2xl": "1400px",
                        },
                    },
                    extend: {
                        colors: {
                            border: "hsl(var(--border))",
                            input: "hsl(var(--input))",
                            ring: "hsl(var(--ring))",
                            background: "hsl(var(--background))",
                            foreground: "hsl(var(--foreground))",
                            primary: {
                                DEFAULT: "hsl(var(--primary))",
                                foreground: "hsl(var(--primary-foreground))",
                            },
                            secondary: {
                                DEFAULT: "hsl(var(--secondary))",
                                foreground: "hsl(var(--secondary-foreground))",
                            },
                            destructive: {
                                DEFAULT: "hsl(var(--destructive))",
                                foreground: "hsl(var(--destructive-foreground))",
                            },
                            muted: {
                                DEFAULT: "hsl(var(--muted))",
                                foreground: "hsl(var(--muted-foreground))",
                            },
                            accent: {
                                DEFAULT: "hsl(var(--accent))",
                                foreground: "hsl(var(--accent-foreground))",
                            },
                            popover: {
                                DEFAULT: "hsl(var(--popover))",
                                foreground: "hsl(var(--popover-foreground))",
                            },
                            card: {
                                DEFAULT: "hsl(var(--card))",
                                foreground: "hsl(var(--card-foreground))",
                            },
                        },
                        borderRadius: {
                            lg: "var(--radius)",
                            md: "calc(var(--radius) - 2px)",
                            sm: "calc(var(--radius) - 4px)",
                        },
                    },
                },
            }
        </script>
        <script src="assets/vendor/react.development.js"></script>
        <script src="assets/vendor/react-dom.development.js"></script>
        <script src="assets/vendor/qrcode-generator.js"></script>
        <script>window.FADROMY_API_URL = "api.php";</script>
</head>
<body class="bg-background text-foreground">
    <div id="root"></div>
    <script src="assets/app.js?v=<?= (int)$v ?>"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(React.createElement(App.default, null));
        });
    </script>
</body>
</html>
