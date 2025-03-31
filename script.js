const detailsData = {
    creativity: {
        title: 'Creativity',
        content: 'Creativity in CAS should make the student engage in creativive endeavors such as music, art, designing, etc. This is so that the student may develop new skills and expand their horizons academically and personally.'
    },
    activity: {
        title: 'Activity',
        content: 'Activity in CAS should make the student engage with activities which promote a healthy lifestyle.'
    },
    service: {
        title: 'Service',
        content: 'Service in CAS should make the student contribute to their community by volunteering and engaging with organizations or experiences that adress potential problems within the community or that will a positive impact on the community.'
        }
    };

    function showDetails(type) {
    const details = document.getElementById('details');
    const title = document.getElementById('details-title');
    const content = document.getElementById('details-content')

    title.textContent = detailsData[type].title;
    content.textContent = detailsData[type].content;
    details.classList.remove('hidden');
}

function hideDetails() {
    const details = document.getElementById('details');
    details.classList.add('hidden');
}