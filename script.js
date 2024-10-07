import { createRoot } from "react-dom/client";
import "./style.css";

function Heading() {
  return (
    <div className="container">
      <header>
        <div className="header">
          <h1>React Component</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section id="about">
            <h3>About Section</h3>
            <img src="http://placebear.com/250/250" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            vero corporis nesciunt perferendis adipisci, laborum in consequuntur
            tempore magnam optio impedit eius aliquam, fugiat incidunt voluptate
            quis dolor maxime aperiam necessitatibus aut ex. Et dignissimos
            autem aliquid natus praesentium asperiores quia alias recusandae
            delectus, commodi, aut voluptatum rem illo suscipit ea assumenda
            error obcaecati veritatis! Consectetur odio sequi, quod nulla
            numquam ipsa. Beatae repellat incidunt dolores accusamus distinctio
            dolor ipsa reprehenderit ducimus? Ipsum ab nemo placeat recusandae
            repellat inventore possimus cumque! Laboriosam, quaerat? Facilis
            pariatur quisquam quod molestias nemo dicta consectetur delectus ex
            esse? Enim ea dignissimos suscipit tempora, placeat, id maxime
            laboriosam dicta rerum unde mollitia? Adipisci dolor inventore
            facere at, dolores molestias officia quasi, neque eveniet ipsum
            porro a alias. Perferendis sint, harum iste, debitis voluptas
            assumenda atque nulla odit optio natus praesentium ad qui
            reprehenderit, esse omnis dolores accusamus totam tenetur voluptate
            delectus! Reprehenderit, doloremque eaque placeat architecto ipsum
            quisquam, omnis nisi numquam sed vel ipsa cum porro modi
            exercitationem blanditiis aliquam veritatis qui asperiores velit
            rerum aut voluptatum molestias quia veniam. Aliquam quasi earum
            voluptas quisquam perspiciatis nulla quae quibusdam, id harum
            tempore, facilis officia repellat accusamus accusantium officiis
            magnam ipsa totam velit itaque dolorem. Hic.
          </p>
        </section>
        <section id="blog">
            <h3>Blog Section</h3>
            <img src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"/>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            vero corporis nesciunt perferendis adipisci, laborum in consequuntur
            tempore magnam optio impedit eius aliquam, fugiat incidunt voluptate
            quis dolor maxime aperiam necessitatibus aut ex. Et dignissimos
            autem aliquid natus praesentium asperiores quia alias recusandae
            delectus, commodi, aut voluptatum rem illo suscipit ea assumenda
            error obcaecati veritatis! Consectetur odio sequi, quod nulla
            numquam ipsa. Beatae repellat incidunt dolores accusamus distinctio
            dolor ipsa reprehenderit ducimus? Ipsum ab nemo placeat recusandae
            repellat inventore possimus cumque! Laboriosam, quaerat? Facilis
            pariatur quisquam quod molestias nemo dicta consectetur delectus ex
            esse? Enim ea dignissimos suscipit tempora, placeat, id maxime
            laboriosam dicta rerum unde mollitia? Adipisci dolor inventore
            facere at, dolores molestias officia quasi, neque eveniet ipsum
            porro a alias. Perferendis sint, harum iste, debitis voluptas
            assumenda atque nulla odit optio natus praesentium ad qui
            reprehenderit, esse omnis dolores accusamus totam tenetur voluptate
            delectus! Reprehenderit, doloremque eaque placeat architecto ipsum
            quisquam, omnis nisi numquam sed vel ipsa cum porro modi
            exercitationem blanditiis aliquam veritatis qui asperiores velit
            rerum aut voluptatum molestias quia veniam. Aliquam quasi earum
            voluptas quisquam perspiciatis nulla quae quibusdam, id harum
            tempore, facilis officia repellat accusamus accusantium officiis
            magnam ipsa totam velit itaque dolorem. Hic.
          </p>
        </section>
        <section id="contact">
            <h3>Contact Section</h3>
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"/>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            vero corporis nesciunt perferendis adipisci, laborum in consequuntur
            tempore magnam optio impedit eius aliquam, fugiat incidunt voluptate
            quis dolor maxime aperiam necessitatibus aut ex. Et dignissimos
            autem aliquid natus praesentium asperiores quia alias recusandae
            delectus, commodi, aut voluptatum rem illo suscipit ea assumenda
            error obcaecati veritatis! Consectetur odio sequi, quod nulla
            numquam ipsa. Beatae repellat incidunt dolores accusamus distinctio
            dolor ipsa reprehenderit ducimus? Ipsum ab nemo placeat recusandae
            repellat inventore possimus cumque! Laboriosam, quaerat? Facilis
            pariatur quisquam quod molestias nemo dicta consectetur delectus ex
            esse? Enim ea dignissimos suscipit tempora, placeat, id maxime
            laboriosam dicta rerum unde mollitia? Adipisci dolor inventore
            facere at, dolores molestias officia quasi, neque eveniet ipsum
            porro a alias. Perferendis sint, harum iste, debitis voluptas
            assumenda atque nulla odit optio natus praesentium ad qui
            reprehenderit, esse omnis dolores accusamus totam tenetur voluptate
            delectus! Reprehenderit, doloremque eaque placeat architecto ipsum
            quisquam, omnis nisi numquam sed vel ipsa cum porro modi
            exercitationem blanditiis aliquam veritatis qui asperiores velit
            rerum aut voluptatum molestias quia veniam. Aliquam quasi earum
            voluptas quisquam perspiciatis nulla quae quibusdam, id harum
            tempore, facilis officia repellat accusamus accusantium officiis
            magnam ipsa totam velit itaque dolorem. Hic.
          </p>
        </section>
      </main>
      <footer>
        <p>All right reserved &copy; 2024.</p>
      </footer>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<Heading />);
