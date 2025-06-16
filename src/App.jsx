import Header from './components/Header'
import EditModal from './components/EditModal'
import PostModal from './components/PostModal'
import PreviewModal from './components/PreviewModal'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <EditModal />
      <PostModal />
      <main className="main" role="main">
        <section className="container" aria-label="Photo gallery">
          {}
        </section>
        <PreviewModal />
      </main>

      <Footer />
    </>
  )
}

export default App
