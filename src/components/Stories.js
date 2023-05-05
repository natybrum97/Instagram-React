import Story from "./Story"
export default function Stories() {

    const arraystory = [
        { src: 'assets/img/9gag.svg', alt: '9gag', usuario: '9gag' },
        { src: 'assets/img/meowed.svg', alt: 'meowed', usuario: 'meowed' },
        { src: 'assets/img/barked.svg', alt: 'barked', usuario: 'barked' },
        { src: 'assets/img/nathanwpylestrangeplanet.svg', alt: 'nathanwpylestrangeplanet', usuario: 'nathanwpylestrangeplanet' },
        { src: 'assets/img/wawawicomics.svg', alt: 'wawawicomics', usuario: 'wawawicomics' },
        { src: 'assets/img/respondeai.svg', alt: 'respondeai', usuario: 'respondeai' },
        { src: 'assets/img/filomoderna.svg', alt: 'filomoderna', usuario: 'filomoderna' },
        { src: 'assets/img/memeriagourmet.svg', alt: 'memeriagourmet', usuario: 'memeriagourmet' }
    ]

    return (
        <div class="stories">

            {arraystory.map(story => <Story srcatributo={story.src} altatributo={story.alt} usuarioatributo={story.usuario} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}