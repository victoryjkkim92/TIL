# CSS sprites기법 사용



## 원본이미지 

![Alt text](images/angry_birds_sprites.png)


## HTML | CSS 코드 

![Alt text](images/sprites_code.png)

* internal css사용


```
<!DOCTYPE html>
<html lang="kr-KR">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            .logo, .logo-friend{
                background: gray; /* 생략가능! */
                width: 110px;
                height: 120px;
                background: url("../images/angry_birds_sprites.png");
                text-indent: 1000px;
                overflow: hidden;
                white-space: nowrap;
            }
            .logo{
                background-position: 0 0;
            }
            .logo-friend{
                background-position: 280px 0;
            }
        </style>
    </head>
    <body>
        <h1 class="logo">Angry bird</h1>
        <h1 class="logo-friend">Green bird</h1>
    </body>
</html>
```

## 화면 출력모습

![Alt text](images/sprites_exercise.png)






## til

어제 개념정리를 끝내고 오늘 아침에 첫번째 할일로 이미지 스프라이트 기법을 사용해서 실습해봐야지 잠들었음

등원하자마자 바로 앵그리버드 이미지파일 찾아서 실습 고고

내가 만든 이미지가 아니어서 너비, 높이값 정하는게 시간이 좀 걸렸지만 

해보고 나니 진짜 내꺼가 된 기분이 들어서 신난당!

그렇담 이젠 IR기법 사용해서 실습해봐야겠다 룰루
