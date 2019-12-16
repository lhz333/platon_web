export default {
    // 平滑滚动
    jump(totalNum) {
        let total = totalNum;
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
            smoothDown();
        } else {
            let newTotal = distance - total + 100;
            step = newTotal / 50;
            smoothUp();
        }

        function smoothDown() {
            if (distance < total) {
                distance += step;
                // Firefox
                document.documentElement.scrollTop = distance;
                // Chrome
                document.body.scrollTop = distance;
                setTimeout(smoothDown, 10);
            } else {
                document.documentElement.scrollTop = total;
                document.body.scrollTop = total;
                window.pageYOffset = total;
            }
        }

        function smoothUp() {
            if (distance > total) {
                distance -= step;
                // Firefox
                document.documentElement.scrollTop = distance;
                // Chrome
                document.body.scrollTop = distance;
                setTimeout(smoothUp, 10);
            } else {
                document.documentElement.scrollTop = total;
                document.body.scrollTop = total;
                window.pageYOffset = total;
            }
        }
    },
    // 移动端-折叠面板平滑滚动
    goAnchor (name, index) {
        const timer = setTimeout(() => {
            const top = document.querySelector(`#${name}${index}`).offsetTop - 50
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let distance = 0
            // console.info('高度', top)
            // console.info('滚动高度', scrollTop)
            if (top > scrollTop) {
                distance = top - scrollTop
                up(0, distance)
            } else {
                distance = scrollTop - top
                down(0, distance)
            }
            function up (dis, distance) {
                const time = setTimeout(() => {
                    if (dis < distance) {
                        document.documentElement.scrollTop = scrollTop + dis
                        document.body.scrollTop = scrollTop + dis
                        dis = dis + 15
                        up(dis, distance)
                    } else {
                        document.documentElement.scrollTop = top
                        document.body.scrollTop = top
                        window.pageYOffset = top
                        clearTimeout(time)
                    }
                }, 16);
            }

            function down (dis, distance) {
                const time = setTimeout(() => {
                    if (dis < distance) {
                        document.documentElement.scrollTop = scrollTop - dis
                        document.body.scrollTop = scrollTop - dis
                        dis = dis + 15
                        down(dis, distance)
                    } else {
                        document.documentElement.scrollTop = top
                        document.body.scrollTop = top
                        window.pageYOffset = top
                        clearTimeout(time)
                    }
                }, 16);
            }
            clearTimeout(timer)
        }, 500)
    },    
    changeURL( name, value) {
        const
            url = location.href,
            pattern = name + '=([^&]*)',
            replaceText = name + '=' + value;
    
        let result = ''
    
        if(url.match(pattern)){
            const tmp = '/(' + name + '=)([^&]*)/gi';
    
            result = url.replace(eval(tmp), replaceText);
        } else {
            if (url.match('[\?]')) {
                result = url + '&' + replaceText;
            } else {
                result = url + '?' + replaceText;
            }
        }
        history.pushState({},0,result);
    }
}