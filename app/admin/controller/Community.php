<?php
namespace app\admin\controller;

use think\facade\Db;

class Community extends Base
{
    public function index()
    {
        $page  = (int)input('page', 1);
        $limit = (int)input('limit', 10);
        $keyword = input('keyword', '');
        $status  = input('status', '');

        $map = [];
        if ($keyword) { $map[] = ['title|content', 'like', "%{$keyword}%"]; }
        if ($status !== '') { $map[] = ['status', '=', (int)$status]; }

        $list = Db::name('community_question')
            ->where($map)->order('id desc')->page($page, $limit)
            ->select()->toArray();
        foreach ($list as &$v) {
            $v['content'] = mb_substr(strip_tags($v['content']), 0, 100);
            $v['tags_arr'] = $v['tags'] ? explode(',', $v['tags']) : [];
        }
        $total = Db::name('community_question')->where($map)->count();
        return $this->success(['list' => $list, 'total' => $total]);
    }

    public function detail($id)
    {
        $q = Db::name('community_question')->find($id);
        if (!$q) { return $this->error('问题不存在'); }
        $q['tags_arr'] = $q['tags'] ? explode(',', $q['tags']) : [];
        $answers = Db::name('community_answer')
            ->where('question_id', $id)
            ->order('id desc')->select()->toArray();
        $q['answers'] = $answers;
        return $this->success($q);
    }

    public function delete($id)
    {
        Db::name('community_answer')->where('question_id', $id)->delete();
        Db::name('community_question')->where('id', $id)->delete();
        return $this->success(null, '删除成功');
    }

    public function deleteAnswer($id)
    {
        $a = Db::name('community_answer')->find($id);
        if ($a) {
            Db::name('community_answer')->where('id', $id)->delete();
            $count = Db::name('community_answer')->where('question_id', $a['question_id'])->where('status', 1)->count();
            Db::name('community_question')->where('id', $a['question_id'])->update(['answer_count' => $count]);
        }
        return $this->success(null, '删除成功');
    }

    public function toggle($id)
    {
        $q = Db::name('community_question')->find($id);
        if (!$q) { return $this->error('问题不存在'); }
        $newStatus = $q['status'] == 1 ? 0 : 1;
        Db::name('community_question')->where('id', $id)->update(['status' => $newStatus]);
        return $this->success(['status' => $newStatus], $newStatus ? '已显示' : '已隐藏');
    }

    public function toggleAnswer($id)
    {
        $a = Db::name('community_answer')->find($id);
        if (!$a) { return $this->error('回答不存在'); }
        $newStatus = $a['status'] == 1 ? 0 : 1;
        Db::name('community_answer')->where('id', $id)->update(['status' => $newStatus]);
        return $this->success(['status' => $newStatus], $newStatus ? '已显示' : '已隐藏');
    }
}
