function ComponentwithUnderline({ title, firstTitle, items = [] }) {

    const titleStyle = {
        fontFamily: 'Arial',
        fontSize: '16px',
        fontWeight: 'bold',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid #B1976B'
    }

    const firstTitleStyle = {
        fontFamily: 'Arial',
        fontSize: '15px',
        fontWeight: 'bold',
    }

    return(
        <div className="education">
            <p style={titleStyle}>{title?.toUpperCase()}</p>
            <p>
                <span style={firstTitleStyle}>{firstTitle}</span>
                <ul>
                    {items.map((items, index) => 
                        <li key={{index}}>{items}</li>
                    )}
                </ul>
            </p>
        </div>
    )
}

export default ComponentwithUnderline;