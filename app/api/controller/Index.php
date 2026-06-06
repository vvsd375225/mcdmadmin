<?php
namespace app\api\controller;

class Index extends Base
{
    public function index()
    {
        return $this->success([
            'name' => 'McdmAdmin API',
            'version' => 'v1',
            'docs' => '/api.php/index/docs'
        ]);
    }
}
