import Post from "./Post"
export default function Posts() {

    const arraypost = [
        { src1: 'assets/img/meowed.svg', alt1: 'meowed', usuario: 'meowed', src2: 'assets/img/gato-telefone.svg', alt2: 'gato-telefone', src3: 'assets/img/respondeai.svg', alt3: 'respondeai', usercurtida: 'respondeai', numerocurtidas: '101.523' },
        { src1: 'assets/img/barked.svg', alt1: 'barked', usuario: 'barked', src2: 'assets/img/dog.svg', alt2: 'dog', src3: 'assets/img/adorable_animals.svg', alt3: 'adorable_animals', usercurtida: 'adorable_animals', numerocurtidas: '99.159' },
        { src1: 'assets/img/barked.svg', alt1: 'wellmoura', usuario: 'wellmoura', src2: 'assets/img/dog.svg', alt2: 'dog', src3: 'assets/img/adorable_animals.svg', alt3: 'adorable_animals', usercurtida: 'adorable_animals', numerocurtidas: '99.159' }
    ]

    return (
        <div className="posts">

            {arraypost.map(post => <Post key={post.alt1} src1atributo={post.src1} alt1atributo={post.alt1} usuarioatributo={post.usuario} src2atributo={post.src2} alt2atributo={post.alt2} src3atributo={post.src3} alt3atributo={post.alt3} usercurtidaatributo={post.usercurtida} numerocurtidasatributo={post.numerocurtidas} />)}

        </div>
    )
}