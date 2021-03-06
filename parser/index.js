const fs = require('fs');
const path = require('path');
const HTMLParser = require('fast-html-parser');

const html = fs.readFileSync(path.resolve(__dirname, 'crawled.html'), 'utf8');
const dom = HTMLParser.parse(html);

const rows = dom.querySelector('.datadisplaytable tbody').childNodes.filter(node => node.tagName === 'tr');

const courses = {};
while (rows.length) {
  const headerRow = rows.shift();
  const bodyRow = rows.shift();

  const titleTokens = headerRow.querySelector('a').rawText.split(' - ');
  const sectionId = titleTokens.pop();
  const courseId = titleTokens.pop();
  const crn = titleTokens.pop();
  const courseTitle = titleTokens.join(' - ');
  const descriptionNodes = bodyRow.childNodes[1].childNodes;
  const [scheduleType] = descriptionNodes.find(node => node.rawText.includes('Schedule Type')).rawText.replace(/\n/g, '').split('* ');
  const credits = Number.parseInt(/(\d\.\d{3})/.exec(descriptionNodes.find(node => node.rawText.includes('Credits')).rawText)[1]);

  const subrows = bodyRow.querySelectorAll('.datadisplaytable tr');
  subrows.shift();
  const meetings = subrows.map(subrow => {
    let [type, period, days, where, dateRange, scheduleType, instructors] = subrow.querySelectorAll('td').map(node => node.rawText);
    instructors = instructors.replace(/ +/g, ' ').split(', ');
    return {
      period,
      days,
      where,
      instructors,
    };
  });

  if (!(courseId in courses)) {
    courses[courseId] = {
      title: courseTitle,
      sections: {},
    };
  }
  courses[courseId].sections[sectionId] = {
    crn,
    meetings,
    scheduleType,
    credits,
  };
}

fs.writeFileSync(path.resolve(__dirname, '..', 'public', 'courses.json'), JSON.stringify(courses), 'utf8');
