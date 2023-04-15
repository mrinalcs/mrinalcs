const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      © <time>{YEAR}</time> <a href="https://mrinal.ga">Mrinal</a>
      <a class="footer" href="/feed.xml">RSS</a>
      <style jsx>{`
        a.footer {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
