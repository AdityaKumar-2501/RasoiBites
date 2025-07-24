import Container from "../Container"
import Card from "../ui/Card"

const Products = () => {
  return (
    <div id="product">
      <Container>
        <main className="mt-30 h-[80vh] w-full p-10 bg-amber-400 rounded-[40px]">
          <div className="relative h-full">
            {/* whole grid */}
            <div className="h-full px-6 ">
              <h1 className="text-6xl uppercase dark-brown section-title">Namkeens for you</h1>
              
              {/* Horizontal scrolling container */}
              <div className="mt-10 overflow-x-auto overflow-y-hidden">
                <div className="flex gap-6 pb-4 min-w-max">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  )
}

export default Products