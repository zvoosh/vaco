import { CiFacebook, CiInstagram, CiMail, CiYoutube } from "react-icons/ci";
import img from "../../assets/unnamed.jpg";
import "../../styles/contact.scss";

const ContactPage = () => {
  return (
    <div>
      <div className="w-100 h-100 bg-black flex justify-center pt-3">
        <div className="container">
          <div className="container-info">
            <div className="image-container">
              <img src={img} alt="image" className="image" />
            </div>
            <div className="ml-2 font-10 text-white flex flex-column justify-center info">
              <div className="">
                <div className="text-gray">Email:</div>
                <div className="mt-1">vlastimir.ilic@gmail.com</div>
              </div>
              <div>
                <div className="text-gray">Social media:</div>
                <div>
                  <div className="mt-1">Facebook</div>
                  <div className="mt-1">Instagram</div>
                  <div className="mt-1">Twitter</div>
                  <div className="mt-1">Youtube</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-50 text-gray line-spacing-11 font-12 pb-5 container-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            corrupti temporibus expedita voluptates deserunt itaque aperiam
            aspernatur excepturi, odio magni. Ut perferendis nam quam ullam
            facere quia, nulla est alias, dolorum, quas modi voluptate
            perspiciatis eos debitis quis. Beatae amet incidunt a similique ea
            minima libero, asperiores eos impedit ad. Similique, laboriosam
            possimus minima fugiat harum quaerat ullam exercitationem veritatis
            ratione id non, illum aperiam excepturi dolor blanditiis dicta
            adipisci. Consectetur rem illo suscipit sunt optio voluptatem
            exercitationem eligendi tenetur perspiciatis laudantium? Modi
            aliquam quaerat nam veritatis accusantium et at esse voluptas,
            tempora iste, alias aperiam earum aliquid sequi unde veniam sapiente
            repudiandae atque consequatur reiciendis? Eius quam itaque totam aut
            maxime iure amet similique recusandae modi, cum quasi quidem
            sapiente nihil repellat illo alias ratione quos eligendi omnis ea
            optio facilis! Asperiores tempore perferendis modi expedita corrupti
            tempora laborum sequi autem nobis possimus qui sapiente molestiae,
            fugiat nihil perspiciatis dolor aliquid officiis placeat. Illo
            sapiente deleniti rerum adipisci, expedita commodi perspiciatis
            molestias cumque praesentium quidem laborum delectus dolore nesciunt
            voluptatem animi doloribus eaque ad aliquam, deserunt corporis
            dolorum perferendis excepturi. Cum nam dolorum vitae quam? Facilis
            itaque est aperiam harum unde non odio. Ipsum omnis iste eum, dicta,
            ea qui temporibus est provident totam fuga iure aspernatur,
            repellendus tenetur aliquam earum. Modi libero magni aliquam. Iste
            nisi dolores officia ducimus voluptas dolor nam quibusdam eaque
            accusantium hic fuga, nihil porro quasi quisquam rerum repudiandae
            fugit at iusto non praesentium dolorem facere enim sequi? Quidem
            sapiente expedita itaque veniam temporibus cupiditate officiis modi,
            consectetur error perferendis sint dolorem tempore minus ut eveniet
            cum ipsam quia neque dolorum nemo, tenetur, odio harum repellendus
            aspernatur! Quasi optio dolore ratione recusandae. Nobis explicabo
            excepturi a magnam architecto enim harum possimus assumenda amet,
            nemo odio accusantium, fuga illo delectus officia dolorem deserunt
            aliquam corporis molestiae. Debitis enim iure molestias dicta ad
            quod fugiat dolore magnam laudantium eveniet, quae temporibus
            dignissimos possimus atque doloribus ducimus non esse cum eligendi!
            Inventore quo enim, nemo sunt quibusdam quia officia dolore dolorum
            maiores laboriosam expedita, ab distinctio nam quas optio nulla
            quaerat non repellendus, omnis explicabo? Provident tempora placeat
            et! Cumque ea facilis a officiis rem, voluptatibus accusantium nulla
            quasi commodi odit magni. Possimus, asperiores. Eum rem perspiciatis
            quis magni unde distinctio, molestias accusamus tempora natus hic
            velit laudantium consectetur delectus debitis commodi est laborum
            rerum incidunt officia vitae neque? Ipsa ullam quidem odio, in
            deleniti expedita fugiat praesentium blanditiis porro animi enim
            eveniet quisquam dolorum quibusdam cum vel? Cumque, voluptatem
            maxime at quia ullam quo rerum quaerat et. Odit facilis cupiditate
            nostrum doloribus impedit? Beatae fugit consequuntur quaerat minima
            vel recusandae, veritatis impedit soluta aspernatur placeat amet
            nesciunt esse quidem exercitationem cupiditate! Voluptas rem porro
            fugit totam aspernatur harum ut ipsa maxime, odio cumque tempora
            quos laborum enim beatae pariatur! Libero quisquam omnis minima
            minus amet. Non necessitatibus aspernatur veniam eum nobis ratione
            aliquam itaque quis adipisci facilis, molestias esse delectus
            consequuntur dolore voluptates temporibus quaerat labore eos quo
            enim expedita ipsa! Soluta ipsam sapiente blanditiis ratione?
          </div>

          <div className="text-white pl-2 pb-2" ><CiMail className="mr-2" style={{transform: "scale(2)"}}/><CiFacebook className="mr-2"  style={{transform: "scale(2)"}}/><CiInstagram className="mr-2"  style={{transform: "scale(2)"}}/><CiYoutube className="mr-2"  style={{transform: "scale(2)"}}/></div>
        </div>
      </div>
    </div>
  );
};
export { ContactPage };
