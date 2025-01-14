<?php
// Lista zauzetih korisničkih imena
$zauzeta_imena = ["admin", "korisnik", "test"];

// Proveravamo da li je POST metodom poslato korisničko ime
if (isset($_POST['username'])) {
    $username = $_POST['username'];

    // Proveravamo da li je korisničko ime zauzeto
    if (in_array($username, $zauzeta_imena)) {
        echo "Korisničko ime je zauzeto";  // Ako je korisničko ime zauzeto
    } else {
        echo "Korisničko ime je dostupno";  // Ako nije zauzeto
    }
} else {
    echo "Korisničko ime nije prosleđeno.";  // Ako korisničko ime nije poslato
}
?>
