export default class BoonUI {
  render() {
    const parent = document.getElementById("ui");

    const child = `
      <h1>Boon</h1>
      <ul>
        <li><button class="boon">B1</button></li>
        <li><button class="boon">B2</button></li>
        <li><button class="boon">B3</button></li>
      </ul>
      `;

    parent.appendChild(child);
  }
}
