<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
</head>
   <body>
      <form action="/uploadfile">
        <label for="file">Select the file to upload</label>
        <input type="file" name="file" id="fileInput">
        <button type="submit">upload</button>
      </form>
   </body>
</html>