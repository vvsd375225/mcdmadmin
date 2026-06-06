<?php
namespace app\api\controller;

use think\facade\Cache;

class Captcha
{
    private $width = 130;
    private $height = 48;
    private $length = 4;

    public function index()
    {
        $code = '';
        $chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        for ($i = 0; $i < $this->length; $i++) {
            $code .= $chars[rand(0, strlen($chars) - 1)];
        }

        $key = uniqid('captcha_', true);
        Cache::set($key, strtolower($code), 300);

        $img = imagecreatetruecolor($this->width, $this->height);
        $bg = imagecolorallocate($img, 240, 242, 245);
        imagefill($img, 0, 0, $bg);

        for ($i = 0; $i < 8; $i++) {
            $color = imagecolorallocate($img, rand(180, 220), rand(180, 220), rand(180, 220));
            imageline($img, rand(0, $this->width), rand(0, $this->height),
                rand(0, $this->width), rand(0, $this->height), $color);
        }

        for ($i = 0; $i < 300; $i++) {
            $color = imagecolorallocate($img, rand(160, 220), rand(160, 220), rand(160, 220));
            imagesetpixel($img, rand(0, $this->width), rand(0, $this->height), $color);
        }

        $fontSize = 22;
        $x = 15;
        for ($i = 0; $i < $this->length; $i++) {
            $color = imagecolorallocate($img, rand(0, 120), rand(0, 120), rand(0, 120));
            $angle = rand(-20, 20);
            $y = rand(28, 38);
            imagettftext($img, $fontSize, $angle, $x, $y, $color,
                $this->fontPath(), $code[$i]);
            $x += 27;
        }

        ob_start();
        imagepng($img);
        $imageData = ob_get_clean();
        imagedestroy($img);

        return response($imageData, 200, [
            'Content-Type' => 'image/png',
            'X-Captcha-Key' => $key,
        ]);
    }

    private function fontPath()
    {
        $paths = [
            'C:\Windows\Fonts\Arial.ttf',
            'C:\Windows\Fonts\Verdana.ttf',
            'C:\Windows\Fonts\Calibri.ttf',
            '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
            '/usr/share/fonts/TTF/DejaVuSans.ttf',
        ];
        foreach ($paths as $p) {
            if (file_exists($p)) return $p;
        }
        return $paths[0];
    }
}
