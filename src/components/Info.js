function Info({children, text, link}) {
    return ( 
        <div class="info">
        {text} <a href={link}>{children}</a> instead.
      </div>
     );
}

export default Info;