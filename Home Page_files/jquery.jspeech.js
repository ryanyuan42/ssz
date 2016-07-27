/**
 * Created by qing on 2015/11/1.
 *
 */
(function($){
    $.fn.jspeech = function(options){
        var defaults = {
//ͨ��������Ӳ���������ֱ�Ӳ���
            "jspeech_a":true,
//���Ӱ�ť�Ŀ��
            "jspeech_a_width":"0"/*"16px"*/,
//���Ӱ�ť�ĸ߶�
            "jspeech_a_height":"13px",
//���Ӱ�ť�ı���ͼƬ
            /*"jspeech_a_png":"url(./image/icon.png) no-repeat",*/
//ֱ�Ӳ�������
            "jspeech_content":"����"
        };
        var options = $.extend(defaults, options);
        this.each(function(){
            if(options.jspeech_a){
//�����ͨ��������Ӳ���
//����ı�����
                var content = $(this).text();
//��������
                var speechClick =
                    "<a href='javascript:void(0);' class='jspeech_a pull-right' style='text-decoration: none;color: #777;'>"
                    +"<span class='icon-chevron-right' aria-hidden='true'></span>" +"</a>";

                $(this).append(speechClick);
//����������ʽ
                $(this).find(".jspeech_a").css({
                    width:options.jspeech_a_width,
                    height:options.jspeech_a_height,
                    "display":"inline-block"
                    /*"background":options.jspeech_a_png*/
                });
                $(this).find(".jspeech_a").click(function(){
//�������¼�
                    var src = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=' + content;
                    if($(this).find(".jspeech_iframe").length > 0){
                        $(this).find(".jspeech_iframe").attr("src",src);
                    }else{
                        var iframe = "<iframe height='0' width='0' class='jspeech_iframe' scrolling='no' frameborder='0' src='"+src+"' ></iframe>";
                        $(this).append(iframe);
                    }
                });
            }else{
                var src = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=' + options.jspeech_content;
                if($(this).find(".jspeech_iframe").length > 0){
                    $(this).find(".jspeech_iframe").attr("src",src);
                }else{
                    var iframe = "<iframe height='0' width='0' class='jspeech_iframe' scrolling='no' frameborder='0' src='"+src+"' ></iframe>";
                    $(this).append(iframe);
                }
            }
        });
    };
})(jQuery);