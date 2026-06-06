<?php
namespace app\admin\controller;

class Captcha
{
    public function image()
    {
        $code = '';
        $chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        for ($i = 0; $i < 4; $i++) {
            $code .= $chars[rand(0, strlen($chars) - 1)];
        }
        session_start();
        $_SESSION['captcha'] = strtolower($code);

        $w = 100; $h = 36;
        $img = imagecreate($w, $h);
        $bg = imagecolorallocate($img, 240, 240, 245);
        $textColor = imagecolorallocate($img, 24, 160, 88);
        $lineColor = imagecolorallocate($img, 200, 200, 210);

        for ($i = 0; $i < 5; $i++) {
            imageline($img, rand(0, $w), rand(0, $h), rand(0, $w), rand(0, $h), $lineColor);
        }

        $font = 5;
        $x = 8; $y = 8;
        imagestring($img, $font, $x, $y, $code[0], $textColor);
        imagestring($img, $font, $x + 22, $y + rand(-2, 5), $code[1], $textColor);
        imagestring($img, $font, $x + 44, $y + rand(-4, 2), $code[2], $textColor);
        imagestring($img, $font, $x + 66, $y + rand(-3, 4), $code[3], $textColor);

        header('Content-Type: image/png');
        imagepng($img);
        imagedestroy($img);
        exit;
    }

    public static function verify($input)
    {
        session_start();
        $stored = $_SESSION['captcha'] ?? '';
        $_SESSION['captcha'] = '';
        return strtolower(trim($input)) === $stored;
    }
}
