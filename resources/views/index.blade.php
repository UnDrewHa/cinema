<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="//cinema.local/css/app.css">

        <title>Cinema App</title>
    </head>
    <body>
        <div id="app" class="cinema-app ant-layout">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
                <div class="ant-spin ant-spin-lg ant-spin-spinning">
                <span class="ant-spin-dot">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                </div>
            </div>
        </div>
        <script src="//cinema.local/js/app.js"></script>
    </body>
</html>
