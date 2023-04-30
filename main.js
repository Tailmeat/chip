const topLeftSmallChip = document.getElementById('top-left-small-chip');
const topLeftSmallChipCount = document.getElementById('top-left-small-chip-count');
const topLeftMediumChip = document.getElementById('top-left-medium-chip');
const topLeftMediumChipCount = document.getElementById('top-left-medium-chip-count');
const topLeftLargeChip = document.getElementById('top-left-large-chip');
const topLeftLargeChipCount = document.getElementById('top-left-large-chip-count');

const bottomLeftSmallChip = document.getElementById('bottom-left-small-chip');
const bottomLeftSmallChipCount = document.getElementById('bottom-left-small-chip-count');
const bottomLeftMediumChip = document.getElementById('bottom-left-medium-chip');
const bottomLeftMediumChipCount = document.getElementById('bottom-left-medium-chip-count');
const bottomLeftLargeChip = document.getElementById('bottom-left-large-chip');
const bottomLeftLargeChipCount = document.getElementById('bottom-left-large-chip-count');

const topRightSmallChip = document.getElementById('top-right-small-chip');
const topRightSmallChipCount = document.getElementById('top-right-small-chip-count');
const topRightMediumChip = document.getElementById('top-right-medium-chip');
const topRightMediumChipCount = document.getElementById('top-right-medium-chip-count');
const topRightLargeChip = document.getElementById('top-right-large-chip');
const topRightLargeChipCount = document.getElementById('top-right-large-chip-count');

const bottomRightSmallChip = document.getElementById('bottom-right-small-chip');
const bottomRightSmallChipCount = document.getElementById('bottom-right-small-chip-count');
const bottomRightMediumChip = document.getElementById('bottom-right-medium-chip');
const bottomRightMediumChipCount = document.getElementById('bottom-right-medium-chip-count');
const bottomRightLargeChip = document.getElementById('bottom-right-large-chip');
const bottomRightLargeChipCount = document.getElementById('bottom-right-large-chip-count');

const betPlaceSmallChipCount = document.getElementById('bet-place-small-chip-count');
const betPlaceMediumChipCount = document.getElementById('bet-place-meidum-chip-count');
const betPlaceLargeChipCount = document.getElementById('bet-place-large-chip-count');

const topLeftWinner = document.getElementById("top-left-winner");
const bottomLeftWinner = document.getElementById("bottom-left-winner");
const topRightWinner = document.getElementById("top-right-winner");
const bottomRightWinner = document.getElementById("bottom-right-winner");

topLeftSmallChip.addEventListener('click', function () {
    let count = parseInt(topLeftSmallChipCount.innerText);
    if (count > 0) {
        count--;
        topLeftSmallChipCount.innerText = count;
        count = parseInt(betPlaceSmallChipCount.innerText);
        count++;
        betPlaceSmallChipCount.innerText = count;
    }
});

topLeftMediumChip.addEventListener('click', function () {
    let count = parseInt(topLeftMediumChipCount.innerText);
    if (count > 0) {
        count--;
        topLeftMediumChipCount.innerText = count;
        count = parseInt(betPlaceMediumChipCount.innerText);
        count++;
        betPlaceMediumChipCount.innerText = count;
    }
});

topLeftLargeChip.addEventListener('click', function () {
    let count = parseInt(topLeftLargeChipCount.innerText);
    if (count > 0) {
        count--;
        topLeftLargeChipCount.innerText = count;
        count = parseInt(betPlaceLargeChipCount.innerText);
        count++;
        betPlaceLargeChipCount.innerText = count;
    }
});

bottomLeftSmallChip.addEventListener('click', function () {
    let count = parseInt(bottomLeftSmallChipCount.innerText);
    if (count > 0) {
        count--;
        bottomLeftSmallChipCount.innerText = count;
        count = parseInt(betPlaceSmallChipCount.innerText);
        count++;
        betPlaceSmallChipCount.innerText = count;
    }
});

bottomLeftMediumChip.addEventListener('click', function () {
    let count = parseInt(bottomLeftMediumChipCount.innerText);
    if (count > 0) {
        count--;
        bottomLeftMediumChipCount.innerText = count;
        count = parseInt(betPlaceMediumChipCount.innerText);
        count++;
        betPlaceMediumChipCount.innerText = count;
    }
});

bottomLeftLargeChip.addEventListener('click', function () {
    let count = parseInt(bottomLeftLargeChipCount.innerText);
    if (count > 0) {
        count--;
        bottomLeftLargeChipCount.innerText = count;
        count = parseInt(betPlaceLargeChipCount.innerText);
        count++;
        betPlaceLargeChipCount.innerText = count;
    }
});

topRightSmallChip.addEventListener('click', function () {
    let count = parseInt(topRightSmallChipCount.innerText);
    if (count > 0) {
        count--;
        topRightSmallChipCount.innerText = count;
        count = parseInt(betPlaceSmallChipCount.innerText);
        count++;
        betPlaceSmallChipCount.innerText = count;
    }
});

topRightMediumChip.addEventListener('click', function () {
    let count = parseInt(topRightMediumChipCount.innerText);
    if (count > 0) {
        count--;
        topRightMediumChipCount.innerText = count;
        count = parseInt(betPlaceMediumChipCount.innerText);
        count++;
        betPlaceMediumChipCount.innerText = count;
    }
});

topRightLargeChip.addEventListener('click', function () {
    let count = parseInt(topRightLargeChipCount.innerText);
    if (count > 0) {
        count--;
        topRightLargeChipCount.innerText = count;
        count = parseInt(betPlaceLargeChipCount.innerText);
        count++;
        betPlaceLargeChipCount.innerText = count;
    }
});

bottomRightSmallChip.addEventListener('click', function () {
    let count = parseInt(bottomRightSmallChipCount.innerText);
    if (count > 0) {
        count--;
        bottomRightSmallChipCount.innerText = count;
        count = parseInt(betPlaceSmallChipCount.innerText);
        count++;
        betPlaceSmallChipCount.innerText = count;
    }
});

bottomRightMediumChip.addEventListener('click', function () {
    let count = parseInt(bottomRightMediumChipCount.innerText);
    if (count > 0) {
        count--;
        bottomRightMediumChipCount.innerText = count;
        count = parseInt(betPlaceMediumChipCount.innerText);
        count++;
        betPlaceMediumChipCount.innerText = count;
    }
});

bottomRightLargeChip.addEventListener('click', function () {
    let count = parseInt(bottomRightLargeChipCount.innerText);
    if (count > 0) {
        count--;
        bottomRightLargeChipCount.innerText = count;
        count = parseInt(betPlaceLargeChipCount.innerText);
        count++;
        betPlaceLargeChipCount.innerText = count;
    }
});

topLeftWinner.addEventListener("click", function () {
    const betPlaceSmallChipCount = document.getElementById("bet-place-small-chip-count");
    const betPlaceMeidumChipCount = document.getElementById("bet-place-meidum-chip-count");
    const betPlaceLargeChipCount = document.getElementById("bet-place-large-chip-count");

    const topLeftSmallChipCount = document.getElementById("top-left-small-chip-count");
    const topLeftMediumChipCount = document.getElementById("top-left-medium-chip-count");
    const topLeftLargeChipCount = document.getElementById("top-left-large-chip-count");

    topLeftSmallChipCount.textContent = parseInt(topLeftSmallChipCount.textContent) + parseInt(betPlaceSmallChipCount.textContent);
    topLeftMediumChipCount.textContent = parseInt(topLeftMediumChipCount.textContent) + parseInt(betPlaceMeidumChipCount.textContent);
    topLeftLargeChipCount.textContent = parseInt(topLeftLargeChipCount.textContent) + parseInt(betPlaceLargeChipCount.textContent);

    betPlaceSmallChipCount.textContent = "0";
    betPlaceMeidumChipCount.textContent = "0";
    betPlaceLargeChipCount.textContent = "0";
});

bottomLeftWinner.addEventListener("click", function () {
    const betPlaceSmallChipCount = document.getElementById("bet-place-small-chip-count");
    const betPlaceMeidumChipCount = document.getElementById("bet-place-meidum-chip-count");
    const betPlaceLargeChipCount = document.getElementById("bet-place-large-chip-count");

    const bottomLeftSmallChipCount = document.getElementById("bottom-left-small-chip-count");
    const bottomLeftMediumChipCount = document.getElementById("bottom-left-medium-chip-count");
    const bottomLeftLargeChipCount = document.getElementById("bottom-left-large-chip-count");

    bottomLeftSmallChipCount.textContent = parseInt(bottomLeftSmallChipCount.textContent) + parseInt(betPlaceSmallChipCount.textContent);
    bottomLeftMediumChipCount.textContent = parseInt(bottomLeftMediumChipCount.textContent) + parseInt(betPlaceMeidumChipCount.textContent);
    bottomLeftLargeChipCount.textContent = parseInt(bottomLeftLargeChipCount.textContent) + parseInt(betPlaceLargeChipCount.textContent);

    betPlaceSmallChipCount.textContent = "0";
    betPlaceMeidumChipCount.textContent = "0";
    betPlaceLargeChipCount.textContent = "0";
});

topRightWinner.addEventListener("click", function () {
    const betPlaceSmallChipCount = document.getElementById("bet-place-small-chip-count");
    const betPlaceMeidumChipCount = document.getElementById("bet-place-meidum-chip-count");
    const betPlaceLargeChipCount = document.getElementById("bet-place-large-chip-count");

    const topRightSmallChipCount = document.getElementById("top-right-small-chip-count");
    const topRightMediumChipCount = document.getElementById("top-right-medium-chip-count");
    const topRightLargeChipCount = document.getElementById("top-right-large-chip-count");

    topRightSmallChipCount.textContent = parseInt(topRightSmallChipCount.textContent) + parseInt(betPlaceSmallChipCount.textContent);
    topRightMediumChipCount.textContent = parseInt(topRightMediumChipCount.textContent) + parseInt(betPlaceMeidumChipCount.textContent);
    topRightLargeChipCount.textContent = parseInt(topRightLargeChipCount.textContent) + parseInt(betPlaceLargeChipCount.textContent);

    betPlaceSmallChipCount.textContent = "0";
    betPlaceMeidumChipCount.textContent = "0";
    betPlaceLargeChipCount.textContent = "0";
});

bottomRightWinner.addEventListener("click", function () {
    const betPlaceSmallChipCount = document.getElementById("bet-place-small-chip-count");
    const betPlaceMeidumChipCount = document.getElementById("bet-place-meidum-chip-count");
    const betPlaceLargeChipCount = document.getElementById("bet-place-large-chip-count");

    const bottomRightSmallChipCount = document.getElementById("bottom-right-small-chip-count");
    const bottomRightMediumChipCount = document.getElementById("bottom-right-medium-chip-count");
    const bottomRightLargeChipCount = document.getElementById("bottom-right-large-chip-count");

    bottomRightSmallChipCount.textContent = parseInt(bottomRightSmallChipCount.textContent) + parseInt(betPlaceSmallChipCount.textContent);
    bottomRightMediumChipCount.textContent = parseInt(bottomRightMediumChipCount.textContent) + parseInt(betPlaceMeidumChipCount.textContent);
    bottomRightLargeChipCount.textContent = parseInt(bottomRightLargeChipCount.textContent) + parseInt(betPlaceLargeChipCount.textContent);

    betPlaceSmallChipCount.textContent = "0";
    betPlaceMeidumChipCount.textContent = "0";
    betPlaceLargeChipCount.textContent = "0";
});

let fruit = false;

document.querySelector('#bet-place').addEventListener('click', () => {
  const chips = document.querySelectorAll('.chip');
  if (fruit === false) {
    chips.forEach(chip => {
      if (chip.innerHTML === "2") {
        chip.innerHTML = "🍎";
        chip.style.border = "13px dashed rgba(255, 255, 255, 0)";
      } else if (chip.innerHTML === "4") {
        chip.innerHTML = "🍐";
        chip.style.border = "13px dashed rgba(255, 255, 255, 0)";
      } else if (chip.innerHTML === "8") {
        chip.innerHTML = "🍇";
        chip.style.border = "13px dashed rgba(255, 255, 255, 0)";
      }
    });
    fruit = true;
  } else {
    chips.forEach(chip => {
      if (chip.innerHTML === "🍎") {
        chip.innerHTML = "2";
        chip.style.border = "13px dashed rgba(255, 255, 255)";
      } else if (chip.innerHTML === "🍐") {
        chip.innerHTML = "4";
        chip.style.border = "13px dashed rgba(255, 255, 255)";
      } else if (chip.innerHTML === "🍇") {
        chip.innerHTML = "8";
        chip.style.border = "13px dashed rgba(255, 255, 255)";
      }
    });
    fruit = false;
  }
});



