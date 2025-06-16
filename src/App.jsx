import Header from './components/Header'
import EditModal from './components/EditModal'
import PostModal from './components/PostModal'
import PreviewModal from './components/PreviewModal'
import Footer from './components/Footer'
import GalleryCard from './components/GalleryCard'

import sampleImg from './assets/images/avatar.png' 
import Card1 from './assets/images/Card1.jpg'
import Card2 from './assets/images/Card2.png'
import Card3 from './assets/images/Card3.png'
import Card4 from './assets/images/Card4.png'
import Card5 from './assets/images/Card5.png'
import Card6 from './assets/images/Card6.png'



function App() {
  const samplePosts = [
    { title: 'Val Thorens', imageSrc: Card1 },
    { title: 'Restaurant terrace', imageSrc: Card2 },
    { title: 'An outdoor cafe', imageSrc: Card3 },
    { title: 'A very long bridge, over the forest...', imageSrc: Card4 },
    { title: 'Tunnel with morning light', imageSrc: Card5 },
    { title: 'Mountain house', imageSrc: Card6 },
   
  ]

  return (
    <>
      <Header />
      <EditModal />
      <PostModal />

      <main className="main" role="main">
        <section className="container" aria-label="Photo gallery">
          {samplePosts.map((post, index) => (
            <GalleryCard
              key={index}
              title={post.title}
              imageSrc={post.imageSrc}
              onPreview={() => console.log(`Previewing ${post.title}`)}
            />
          ))}
        </section>
        <PreviewModal />
      </main>

      <Footer />
    </>
  )
}

export default App
