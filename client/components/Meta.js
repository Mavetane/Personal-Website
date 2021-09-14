import Head from 'next/head'


const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="google-site-verification" content="venaSTiqhtGmPcqwipVTb5Sz1ooTUf4-tr39ZkjjpCo" />
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <meta name='title' content={title} />
            <link rel='icon' href='/images/logo2.jpg' />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />

        </Head>
    )
}
Meta.defaultProps = {
    title: 'Collen Maphike',
    keywords: 'Junior Software Developer, Programmer, Full stack developer, Front End Developer, Back End Developer, Team worker, Collen Lindile Maphike, Mavetane, Veties',
    description: 'A goal driven software developer who is always in search of knowledge, reliable and ensures that he delivers on what was promised.An open communicator that is not afraid to question and advise where appropriate.'
}

export default Meta
