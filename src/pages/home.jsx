import React from 'react';

import Preview from './../components/Preview';
import Hero from './../components/Hero';

export default () => (

    <React.Fragment>
        <Hero />
        <div className='container'>
            <h1 className='text-center my-4'>純天然 · 安心 · 健康 · 不含防腐劑 · 無食品添加物</h1>
            <p className='text-center my-4'>自認還是少女的媽來到英國之後，為了要提供吃貨鵝女們源源不絕的能量來源，又不希望他們只能選擇外面的甜食並把食品添加物及糖霜吃飽吃滿，再加上在這寒冷的異鄉生活，更加深了對從小到大在臺灣吃的蛋糕、甜點的思念，也是帶著這樣的思鄉情懷下而開始走向烘培之路！ 在家人及友人的鼓勵之下，也決定創立FUN HOME BAKERY，希望能夠透過我手的溫度，將蛋糕最天然的味道帶給不管是在異鄉的你們還是本地的居民。 </p>
            <Preview />
        </div>
    </React.Fragment>

);
