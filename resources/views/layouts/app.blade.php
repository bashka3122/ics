<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="@stack('html-class')">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Islaamic Collage Manager</title>

    {{-- Scripts --}}
    @stack('head-scripts')


    {{-- Fonts --}}
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap4.min.css">
    {{-- Styles --}}
    <link href="{{ mix($stylesheet ?? 'css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/vendor.css') }}" rel="stylesheet">

    @stack('head-after')
</head>

<body>

    <div id="app">

        @yield('content')

    </div>

    @stack('bottom')

</body>

</html>