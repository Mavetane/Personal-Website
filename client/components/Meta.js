import Head from 'next/head'


const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <meta name='title' content={title} />
            <link rel='icon' href='/favicon.ico' />

            <title>{title}</title>
        </Head>
    )
}
Meta.defaultProps = {
    title: 'Collen Maphike',
    keywords: 'Junior Software Developer, Programmer, Full stack developer, Front End Developer, Back End Developer, Team worker',
    description: 'A goal driven software developer who is always in search of knowledge, reliable and ensures that he delivers on what was promised.An open communicator that is not afraid to question and advise where appropriate.'
}

export default Meta