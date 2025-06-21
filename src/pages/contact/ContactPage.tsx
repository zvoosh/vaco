import img from "../../assets/unnamed.jpg";
import "../../styles/contact.scss";

const ContactPage = () => {
  return (
    <>
      <main>
        <div className="w-100 h-100 bg-black flex justify-center pt-3">
          <div className="container">
            <section className="container-info">
              <div className="image-container">
                <img
                  loading="lazy"
                  src={img}
                  alt="Portrait of Vlastimir Ilić in studio setting"
                  className="image"
                />
              </div>
              <section className="ml-2 font-10 text-white flex flex-column justify-center info">
                <div>
                  <p className="text-gray">Email:</p>
                  <p className="mt-1">vlastimir.ilic@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray">Social media:</p>
                  <div>
                    <p className="mt-1">Facebook</p>
                    <p className="mt-1">Instagram</p>
                    <p className="mt-1">Twitter</p>
                    <p className="mt-1">Youtube</p>
                  </div>
                </div>
              </section>
            </section>
            <p className="h-50 text-gray line-spacing-11 font-12 pb-5 container-text normal-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              corrupti temporibus expedita voluptates deserunt itaque aperiam
              aspernatur excepturi, odio magni. Ut perferendis nam quam ullam
              facere quia, nulla est alias, dolorum, quas modi voluptate
              perspiciatis eos debitis quis. Beatae amet incidunt a similique ea
              minima libero, asperiores eos impedit ad. Similique, laboriosam
              possimus minima fugiat harum quaerat ullam exercitationem
              veritatis ratione id non, illum aperiam excepturi dolor blanditiis
              dicta adipisci. Consectetur rem illo suscipit sunt optio
              voluptatem exercitationem eligendi tenetur perspiciatis
              laudantium? Modi aliquam quaerat nam veritatis accusantium et at
              esse voluptas, tempora iste, alias aperiam earum aliquid sequi
              unde veniam sapiente repudiandae atque consequatur reiciendis?
              Eius quam itaque totam aut maxime iure amet similique recusandae
              modi, cum quasi quidem sapiente nihil repellat illo alias ratione
              quos eligendi omnis ea optio facilis! Asperiores tempore
              perferendis modi expedita corrupti tempora laborum sequi autem
              nobis possimus qui sapiente molestiae, fugiat nihil perspiciatis
              dolor aliquid officiis placeat. Illo sapiente deleniti rerum
              adipisci, expedita commodi perspiciatis molestias cumque
              praesentium quidem laborum delectus dolore nesciunt voluptatem
              animi doloribus eaque ad aliquam, deserunt corporis
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export { ContactPage };
