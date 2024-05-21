<?php
class Division {
    public function divide($numerator, $denominator) {
        if ($denominator == 0) {
            throw new Exception("Division by zero error.");
        }
        return $numerator / $denominator;
    }
}
try {
    $division = new Division();
    $numerator = 10;
    $denominator = 0;
    $result = $division->divide($numerator, $denominator);
    echo "Result: " . $result;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
