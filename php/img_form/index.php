<?php
$uploadDir = 'uploads/';
$allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
$maxFileSize = 2097152;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
  $file = $_FILES['file'];

  if ($file['error'] !== UPLOAD_ERR_OK) {
    echo "Error uploading file. Error code: {$file['error']}";
    exit();
  }

  // Checking  filetype here
  if (!in_array($file['type'], $allowedTypes)) {
    echo 'Invalid file type. Only PNG, JPEG, and GIF files are allowed.';
    exit();
  }

  // Checking file size here
  if ($file['size'] > $maxFileSize) {
    echo 'File is too large. Maximum file size is 2 MB.';
    exit();
  }
  $upload_path = 'uploads/' . $new_filename; // this is the upload path

  if (move_uploaded_file($file['tmp_name'], $upload_path)) {
    echo 'File uploaded successfully.';
  } else {
    echo 'Error uploading file.';
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>

<body>
    <h1>Upload a File</h1>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">Upload</button>
    </form>
</body>

</html>
