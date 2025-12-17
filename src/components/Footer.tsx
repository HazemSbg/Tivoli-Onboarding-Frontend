export const Footer = () => {
    return (
        <footer className={'flex flex-row p-10 justify-center content-center gap-20'}>
            <div className={'flex flex-col justify-center content-center'}>
                <h1>Contact Us</h1>
                <p>We're here to assist you! If you have any questions or need assistance, please feel free to reach out
                    to
                    us.</p>
            </div>
            <div>
                <img className={'w-10'} alt={'tech support logo'} src={'technical-support.svg'}/>
                <h1>Technical Support</h1>
                <p>Mail: n.manalo@tivoligroup.com</p>
                <p>Mail: r.saringan@tivoligroup.com</p>
                <p>Landline: +974 40212014</p>
            </div>

            <div>
                <img className={'w-10'} alt={'human logo'} src={'human.svg'}/>
                <h1>HR Question</h1>
                <p>Mail: hr@tivoligroup.com</p>
                <p>Landline: +974 4021 2019</p>
            </div>
        </footer>
    );
}