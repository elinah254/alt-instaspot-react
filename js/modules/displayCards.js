import { cardsData } from "./cards.js";

const style = document.createElement("style");
style.textContent = `
    .like-icon:focus {
      outline: none;
    }

    .like-icon.liked path {
      fill: red;
      stroke: red;
    }
      
    .card-img-container {
    overflow: hidden;
    }

  .card-img {
    transition: transform 0.3s ease-in-out;
  }

  .card.focused .card-img {
    transform: scale(1.1);
  }
  `;
document.head.appendChild(style);

// function to create and display cards inside a container
export function displayCards(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = "";

  cardsData.forEach((card) => {
    const cardHTML = `
      <article class="card">
        <div class="card-img-container">
          <img
            src="${card.imgSrc}"
            alt="${card.imgAlt}"
            class="card-img"
            loading="lazy"
          />
        </div>

        <div class="card-description">
          <p class="card-title">${card.title}</p>
          <div class="like">
            <svg
              class="like-icon"
              role="button"
              tabindex="0"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Like button"
            >
              <path
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                stroke="#212121"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </article>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
    console.log(card.imgSrc);
  });

  // Event listener for toggling 'liked' class on like icons
  container.addEventListener("click", (e) => {
    const likeIcon = e.target.closest(".like-icon");
    if (likeIcon) {
      likeIcon.classList.toggle("liked");
    }
  });
}
