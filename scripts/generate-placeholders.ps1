<#
Generates four placeholder PNG images into public/img: 1.png..4.png
Requires Windows PowerShell with access to System.Drawing.
Run from repository root: .\scripts\generate-placeholders.ps1
#>

Param()

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDir "..")
$imgDir = Join-Path $projectRoot "public\img"

if (-not (Test-Path $imgDir)) {
    New-Item -ItemType Directory -Path $imgDir | Out-Null
}

[int]$width = 800
[int]$height = 600

$colors = @("#FFC0CB","#E6E6FA","#FFD1DC","#E0FFFF")
$labels = @("THANKS","CHEER","SORRY","SAD")

for ($i = 1; $i -le 4; $i++) {
    $bmp = New-Object System.Drawing.Bitmap $width, $height
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml($colors[$i-1]))

    # Draw label text
    $font = New-Object System.Drawing.Font("Segoe UI", 48, [System.Drawing.FontStyle]::Bold)
    $brush = [System.Drawing.Brushes]::White
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0,0,$width,$height)
    $g.DrawString($labels[$i-1], $font, $brush, $rect, $sf)

    $outPath = Join-Path $imgDir ("{0}.png" -f $i)
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $bmp.Dispose()
}

Write-Host ("Generated placeholder images in {0}: 1.png..4.png" -f $imgDir)
