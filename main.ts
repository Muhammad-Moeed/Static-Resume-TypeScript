const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const skillsList = document.getElementById('skills-list') as HTMLElement | null;

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsList) {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
        } else {
            skillsList.style.display = 'none';
        }
    }
});

const toggleEduButton = document.getElementById('toggle-edu') as HTMLButtonElement | null;
const eduList = document.getElementById('edu-list') as HTMLElement | null;

toggleEduButton?.addEventListener('click', () => {
    if (eduList) {
        if (eduList.style.display === 'none') {
            eduList.style.display = 'block';
        } else {
            eduList.style.display = 'none';
        }
    }
});

const toggleExpButton = document.getElementById('toggle-exp') as HTMLButtonElement | null;
const expList = document.getElementById('exp-list') as HTMLElement | null;

toggleExpButton?.addEventListener('click', () => {
    if (expList) {
        if (expList.style.display === 'none') {
            expList.style.display = 'block';
        } else {
            expList.style.display = 'none';
        }
    }
});
