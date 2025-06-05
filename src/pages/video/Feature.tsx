import video from "../../assets/9535416-uhd_3840_2160_30fps.mp4";
import road from "../../assets/road.jpg";
import mountain from "../../assets/mountain.jpg";
import cowboy from "../../assets/cowboy.jpg";
import "../../styles/video.scss";
import { VideoDetailsPage } from "./VideoDetailsPage";
import { useLocation } from "react-router";

const defaults = [
  {
    title: "Feature",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo odio expedita ducimus aspernatur impedit veniam
                    adipisci dicta quam itaque molestias reiciendis alias
                    repellendus repudiandae, praesentium sint deleniti esse ex
                    soluta minima dolor. Veritatis aperiam iste beatae debitis
                    perferendis sit similique praesentium dolore placeat.
                    Expedita, ab. Atque inventore aspernatur dolorum harum cum,
                    aut ducimus, adipisci ut fugit repudiandae distinctio magnam
                    temporibus sequi repellat voluptates numquam, nostrum
                    mollitia nam? Corrupti debitis atque laboriosam dolorem
                    voluptatibus blanditiis, voluptatum obcaecati cupiditate.
                    Impedit neque natus odit consequatur laboriosam. Tempora
                    mollitia libero et vitae! Similique enim debitis, harum
                    sequi corporis rerum neque voluptatibus maiores obcaecati
                    eos?`,
  },
  {
    title: "Event",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo odio expedita ducimus aspernatur impedit veniam
                    adipisci dicta quam itaque molestias reiciendis alias
                    repellendus repudiandae, praesentium sint deleniti esse ex
                    soluta minima dolor. Veritatis aperiam iste beatae debitis
                    perferendis sit similique praesentium dolore placeat.
                    Expedita, ab. Atque inventore aspernatur dolorum harum cum,
                    aut ducimus, adipisci ut fugit repudiandae distinctio magnam
                    temporibus sequi repellat voluptates numquam, nostrum
                    mollitia nam? Corrupti debitis atque laboriosam dolorem
                    voluptatibus blanditiis, voluptatum obcaecati cupiditate.
                    Impedit neque natus odit consequatur laboriosam. Tempora
                    mollitia libero et vitae! Similique enim debitis, harum
                    sequi corporis rerum neque voluptatibus maiores obcaecati
                    eos?`,
  },
  {
    title: "Documentary",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo odio expedita ducimus aspernatur impedit veniam
                    adipisci dicta quam itaque molestias reiciendis alias
                    repellendus repudiandae, praesentium sint deleniti esse ex
                    soluta minima dolor. Veritatis aperiam iste beatae debitis
                    perferendis sit similique praesentium dolore placeat.
                    Expedita, ab. Atque inventore aspernatur dolorum harum cum,
                    aut ducimus, adipisci ut fugit repudiandae distinctio magnam
                    temporibus sequi repellat voluptates numquam, nostrum
                    mollitia nam? Corrupti debitis atque laboriosam dolorem
                    voluptatibus blanditiis, voluptatum obcaecati cupiditate.
                    Impedit neque natus odit consequatur laboriosam. Tempora
                    mollitia libero et vitae! Similique enim debitis, harum
                    sequi corporis rerum neque voluptatibus maiores obcaecati
                    eos?`,
  },
  {
    title: "Coorporate",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo odio expedita ducimus aspernatur impedit veniam
                    adipisci dicta quam itaque molestias reiciendis alias
                    repellendus repudiandae, praesentium sint deleniti esse ex
                    soluta minima dolor. Veritatis aperiam iste beatae debitis
                    perferendis sit similique praesentium dolore placeat.
                    Expedita, ab. Atque inventore aspernatur dolorum harum cum,
                    aut ducimus, adipisci ut fugit repudiandae distinctio magnam
                    temporibus sequi repellat voluptates numquam, nostrum
                    mollitia nam? Corrupti debitis atque laboriosam dolorem
                    voluptatibus blanditiis, voluptatum obcaecati cupiditate.
                    Impedit neque natus odit consequatur laboriosam. Tempora
                    mollitia libero et vitae! Similique enim debitis, harum
                    sequi corporis rerum neque voluptatibus maiores obcaecati
                    eos?`,
  },
  {
    title: "Commercial",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo odio expedita ducimus aspernatur impedit veniam
                    adipisci dicta quam itaque molestias reiciendis alias
                    repellendus repudiandae, praesentium sint deleniti esse ex
                    soluta minima dolor. Veritatis aperiam iste beatae debitis
                    perferendis sit similique praesentium dolore placeat.
                    Expedita, ab. Atque inventore aspernatur dolorum harum cum,
                    aut ducimus, adipisci ut fugit repudiandae distinctio magnam
                    temporibus sequi repellat voluptates numquam, nostrum
                    mollitia nam? Corrupti debitis atque laboriosam dolorem
                    voluptatibus blanditiis, voluptatum obcaecati cupiditate.
                    Impedit neque natus odit consequatur laboriosam. Tempora
                    mollitia libero et vitae! Similique enim debitis, harum
                    sequi corporis rerum neque voluptatibus maiores obcaecati
                    eos?`,
  },
];

const FeaturePage = () => {
  const location = useLocation();

  if (location.pathname.includes("/video-feature")) {
    return (
      <VideoDetailsPage
        title={defaults[0].title}
        description={defaults[0].description}
        image={road}
        video={[video, video, video]}
      />
    );
  } else if (location.pathname.includes("/video-documentary")) {
    return (
      <VideoDetailsPage
        title={defaults[2].title}
        description={defaults[2].description}
        image={mountain}
        video={[video, video, video]}
      />
    );
  }else if (location.pathname.includes("/video-commercial")) {
    return (
      <VideoDetailsPage
        title={defaults[4].title}
        description={defaults[4].description}
        image={cowboy}
        video={[video, video, video]}
      />
    );
  }else if (location.pathname.includes("/video-event")) {
    return (
      <VideoDetailsPage
        title={defaults[1].title}
        description={defaults[1].description}
        image={road}
        video={[video, video, video]}
      />
    );
  }else if (location.pathname.includes("/video-coorporate")) {
    return (
      <VideoDetailsPage
        title={defaults[3].title}
        description={defaults[3].description}
        image={road}
        video={[video, video, video, video, video, video, video, video, video, video, video]}
      />
    );
  }else {
    return <div>ERROR 404</div>
  }
};

export { FeaturePage };
