import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
  const id = getHash()
  console.log(id)
  const detail = await getData(id);
  const view = `
  <div class="round"><img src="./assets/${detail.photo}" alt="...">
  <h1>${detail.title}</h1>
</div>
<p class="title">${detail.span}</p>
<p>${detail.paragraph}</p>

  `;
  return view;
};

export default Home;