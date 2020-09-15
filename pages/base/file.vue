<template>
  <div class="cont">
    <h1>ファイル・ディレクトリ構造について</h1>
    <div>
      Web制作にあたってよく聞く「ファイル」とは
      .htmlや.cssなどのファイルのことを多くはさします。
      ディレクトリとは画像が格納されているフォルダのことを言います。
      <code>
        <pre>
        /index.html これはファイル
        /css これはディレクトリ
        /js これはディレクトリ
        </pre>
      </code>

      <h2>よく見るファイル形式について</h2>
      <div>
        <dl>
          <dt>.html</dt>
          <dd>
            HTMLファイルのことです。このファイルが実際にページとして表示されています。
          </dd>
        </dl>
        <dl>
          <dt>.css</dt>
          <dd>
            CSSファイルのことです。ページの見た目を整える記述が指定されています。
          </dd>
        </dl>
        <dl>
          <dt>.js</dt>
          <dd>
            javascriptファイルのことです。サイトでの動きなどの部分を担当しています。
            <br />
            よく、「.min.js」というファイルが使用されていることがありますが、この「.min」というのはコード内の不要な改行などを削除して全て一行になったものを指します。
            基本的に、.minがついていても内容は変わりません。（人間が読むのは不可能ですが。）
          </dd>
        </dl>
        <dl>
          <dt>.jpg</dt>
          <dd>
            画像ファイルのことです。「jpeg」は同じものとして考えても差し支えありません。
            <br />
            ファイルサイズが小さく、約1677万色と高画質で色彩を表現できるので、風景写真などの繊細なグラデーション表現が多い写真撮影に向いている形式です。
            <br />
            ただし、元データをさらに圧縮してサイズを小さくすることはできますが、一度縮小すると元には戻せないので、加工や保存などを繰り返すと画質が劣化していきます。
            <br />
            ＜例＞
            <figure>
              <figcaption>A.もとのサイズのままのもの（1.6MB）</figcaption>
              <img
                src="~/assets/img/fd401077.jpg"
                alt="もとのサイズのままのもの"
              />
            </figure>
            <figure>
              <figcaption>B.400pxに小さくしたもの（約18KB）</figcaption>
              <img
                src="~/assets/img/fd401077-small.jpg"
                alt="400pxに小さくしたもの"
              />
            </figure>
            Bのほうが圧倒的にファイルサイズは小さいですが、背景の白い部分に線が見えたりと
            <br />
            圧縮することによって元の画像都の見え方が違うことが分かると思います。
          </dd>
        </dl>
        <dl>
          <dt>.png</dt>
          <dd>
            これも画像ファイルのことです。グラデーション豊かな写真でもアニメ絵や図形などの輪郭のはっきりした画像まで、幅広い画像の保存に適しています。
            <br />
            さらに、「可逆圧縮」により画像の大きさをリサイズしても画質は劣化しません。
            <br />
            また、pngファイルは透明な部分を透明なまま画像として保存できます。
            <br />
            いい事だらけの反面ファイルサイズが大きくなってしまうので、大量に写真のあるサイトなどの場合はあまり向いていません。
            <figure>
              <figcaption>A.JPGファイルのもの(11KB)</figcaption>
              <img src="~/assets/img/baloon.jpg" alt="JPGファイルのもの" />
            </figure>
            <figure>
              <figcaption>B.PNGファイルのもの(31KB)</figcaption>
              <img src="~/assets/img/baloon.png" alt="PNGファイルのもの" />
            </figure>
          </dd>
        </dl>
        <dl>
          <dt>.svg</dt>
          <dd>
            これも画像ファイルのことです。
            <figure>
              <figcaption>A.SVGファイルのもの(8KB)</figcaption>
              <img src="~/assets/img/baloon.svg" alt="SVGファイルのもの" />
            </figure>
          </dd>
        </dl>
        <dl>
          <dt>.json</dt>
          <dd>jsonファイルのことです。</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      meta: {
        title: 'What we provide',
        description: 'ファイルやディレクトリについて',
        type: 'article',
        url: '',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log('🌷filePage')
    })
  },
})
</script>
<style lang="scss" scoped></style>
