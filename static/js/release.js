function getEasterSunday(year) {
  let month = 3;
  const g = year % 19;
  const c = Math.floor(year / 100);
  const h = (c - Math.floor(c / 4) - Math.floor((8 * c + 13) / 25) + 19 * g + 15) % 30;
  const i = h - Math.floor(h / 28) * (1 - Math.floor(h / 28) * Math.floor(29 / (h + 1)) * Math.floor((21 - g) / 11));
  let day = i - ((year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4)) % 7) + 28;

  if (day > 31) {
    month = 4;
    day -= 31;
  }

  return new Date(year, month - 1, day);
}

function getFirstMondayAvoidingHolidays(year, month) {
  let date = new Date(year, month - 1, 1);

  const holidays = [
    new Date(year, 0, 1),
    new Date(year, 0, 2),
    new Date(getEasterSunday(year).getTime() + 24 * 60 * 60 * 1000)
  ];

  while (
    date.getDay() !== 1 || 
    holidays.some(h => h.toDateString() === date.toDateString())
  ) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

function getNextReleaseDatesWithNames(count = 4) {
  const releaseMonths = [1, 4, 7, 10];
  const monthNames = {
    1: "Winterrelease",
    4: "Frühlingsrelease",
    7: "Sommerrelease",
    10: "Herbstrelease"
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentYear = today.getFullYear();

  const dates = [];

  for (const year of [currentYear, currentYear + 1]) {
    for (const month of releaseMonths) {
      const date = getFirstMondayAvoidingHolidays(year, month);

      if (date >= today) {
        dates.push({
          date: date,
          name: monthNames[month]
        });
      }
    }
  }

  return dates.sort((a, b) => a.date - b.date).slice(0, count);
}

function renderReleases() {
  const releases = getNextReleaseDatesWithNames();
  const formatter = new Intl.DateTimeFormat('de-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  let html = `
    <table>
      <thead>
        <tr>
          <th>Datum</th>
          <th>Release</th>
        </tr>
      </thead>
      <tbody>
  `;

  releases.forEach(release => {
    const dateStr = formatter.format(release.date);
    html += `
        <tr>
          <td>${dateStr}</td>
          <td>${release.name}</td>
        </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  return html;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('releases-container');
    if (container) {
      container.innerHTML = renderReleases();
    }
  });
} else {
  const container = document.getElementById('releases-container');
  if (container) {
    container.innerHTML = renderReleases();
  }
}