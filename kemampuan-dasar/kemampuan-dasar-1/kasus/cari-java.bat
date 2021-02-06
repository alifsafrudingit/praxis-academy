$lokasiProyek = "$([environment]::GetFolderPath("MyDocuments"))\cari-java"
$lokasiCache  = "$env:HOME\bpdp\src\hari-01"

Filter AdaFileJava
{
    If (Test-Path "$lokasiProyek\$($_.java)") {
        Write-Host "Ada file " -NoNewline
        Write-Host $_.java -NoNewline
        "pada direktori {$lokasiCache}"
    }
}

dir $lokasiCache | AdaFileJava