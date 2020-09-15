<template>
  <div class="cont">
    <div class="mv">
      <h1 class="mv-ttl">Let's study web site</h1>
    </div>
    <section class="sction">
      <div class="sction-inr">
        <h2 class="setcion-ttl">次の課題</h2>
      </div>
    </section>
    <section class="section">
      <div class="section-inr">
        <h2 class="section-ttl">目次</h2>
        <ol class="toc-list">
          <li class="toc-item">
            <h3 class="toc-ttl">
              <span class="toc-itemIcon">1</span>
              <span class="toc-itemTxt">基本知識</span>
            </h3>
            <div class="toc-cont">
              <ol class="toc-list-sec">
                <li class="toc-listItme-sec">
                  <a class="toc-link" href="/">
                    1-1 ファイル・ディレクトリ構造について
                  </a>
                </li>
                <li class="toc-listItme-sec">
                  <a class="toc-link" href="/">1-2 パスについて</a>
                </li>
                <li class="toc-listItme-sec">
                  <a class="toc-link" href="/">1-3 ブラウザ・OS</a>
                </li>
              </ol>
            </div>
          </li>
          <li class="toc-item">
            <h3 class="toc-ttl">
              <span class="toc-itemIcon">2</span>
              <span class="toc-itemTxt">ツールについて</span>
            </h3>
            <div class="toc-cont">
              <ol class="toc-list-sec">
                <li>2-1 エディター</li>
                <li>2-2 Adobe製品</li>
                <li>2-3 Git・SVN</li>
              </ol>
            </div>
          </li>
          <li class="toc-item">
            <h3 class="toc-ttl">
              <span class="toc-itemIcon">3</span>
              <span class="toc-itemTxt">HTMLについて</span>
            </h3>
            <div class="toc-cont">
              <ol class="toc-list-sec">
                <li>3-1 HTMLとは</li>
                <li>3-2 HTMLのタグについて</li>
                <li>3-3 タグを書いてみよう</li>
              </ol>
            </div>
          </li>
          <li class="toc-item">
            <h3 class="toc-ttl">
              <span class="toc-itemIcon">4</span>
              <span class="toc-itemTxt">CSSについて</span>
            </h3>
            <div class="toc-cont">
              <ol class="toc-list-sec">
                <li>4-1 CSSとは</li>
                <li>4-2 CSSの書き方</li>
                <li>4-3 CSSを書いてみよう</li>
                <li>4-4 クラス名のつけ方</li>
                <li>4-5 SASSについて</li>
                <li>4-6 フレームワークの紹介</li>
              </ol>
            </div>
          </li>
          <li class="toc-item">
            <h3 class="toc-ttl">
              <span class="toc-itemIcon">5</span>
              <span class="toc-itemTxt">Javascriptについて</span>
            </h3>
            <div class="toc-cont">
              <ol class="toc-list-sec">
                <li>5-1 Javascriptとは</li>
                <li>5-2 jQueryについて</li>
                <li>5-3 JSを書いてみよう</li>
                <li>5-4 プラグインとは</li>
                <li>5-5 フレームワークの紹介</li>
              </ol>
            </div>
          </li>
          <li class="toc-item">
            <h3 class="toc-ttl">
              <span class="toc-itemIcon">6</span>
              <span class="toc-itemTxt">実際にコーディングしてみよう</span>
            </h3>
            <div class="toc-cont">
              <ol class="toc-list-sec">
                <li>6-1 課題1（ペラ1）</li>
                <li>6-2 課題2（5ページくらい）</li>
              </ol>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  &-inr {
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px;
  }
  &-ttl {
    @include fontNotosansR;
    font-size: 24px;
    line-height: 1.5;
    border-bottom: 2px solid $or;
    padding-bottom: 2px;
    position: relative;
    margin-bottom: 30px;
    &::first-letter {
      font-size: 150%;
    }

    &:after {
      display: block;
      content: '';
      width: 100%;
      height: 2px;
      background: $bk;
    }
  }
}

.btn {
  display: inline-block;
  border: 1px solid;
  padding: 2px 15px;
  border-radius: 2px;
  color: $bk;
}

/*---------------------
  TOP
---------------------*/
.top {
  .mv {
    display: block;
    width: 100%;
    height: 50vh;
    // background: url(../img/mv_bg.jpg) center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &-inr {
      height: 100%;
      background: #1d1d34cc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-ttl {
      color: $wt;
      text-align: center;
      @include fontRoboto;
      font-size: 6vw;
      letter-spacing: 0.05em;
    }
  }
}

.toc {
  &-ttl {
    @include fontNotosansB;
    font-size: 20px;
  }
  &-itemIcon {
    display: inline-block;
    // border: 2px solid;
    // width: 1.9em;
    margin-right: 10px;
    text-align: center;
    // background: $bk;
    // color: $wt;
    // border-radius: 50%;
  }
  &-item {
    & + & {
      margin-top: 2em;
    }
  }
  &-cont {
    padding-left: 1em;

    .btn-wrap {
      float: right;
    }
  }
  &-listItme-sec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $gy;
  }
  &-link {
    color: $bk;
    display: block;
    width: 100%;
    transition: all 0.3s ease-in;
    padding: 1.5em 0.5em;

    &:hover {
      background: #f77f001c;
    }
  }
}
.footer {
  display: block;
  width: 100%;
  background: $bk;
  color: $wt;
  text-align: center;

  &-copy {
    font-size: 12px;
    padding: 10px;
  }
}
</style>
