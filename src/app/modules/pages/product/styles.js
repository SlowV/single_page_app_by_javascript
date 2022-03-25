export const styles = `
    <style>
    .user-info {
        background: var(--white);
        width: 100%;
        display: flex;
        padding: 20px 40px;
        border-radius: 5px;
        justify-content: space-between;
        flex-direction: column;
    }
    
    img.avatar {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        object-fit: cover;
    }
    
    h3 {
        font-family: 'Pacifico', sans-serif;
        margin-bottom: 20px;
        color: var(--secondary);
    }
    
    .info {
        display: flex;
    }
    
    .info .text {
        position: relative;
        border-left: 1px solid #dedede;
        margin-left: 20px;
        font-size: 15px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        color: var(--secondary);
        font-weight:bold;
    }
    
    .info .text div {
        position: relative;
        width: 25%;
    }
    
    .box-image {
        border-top: 1px solid #dedede;
        margin: 20px 0;
        padding: 15px 0;
    }
    
    .images-title {
        font-size: 15px;
        font-weight: bold;
        color: var(--secondary);
        margin-bottom: 15px;
    }
    
    .box-image .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-left: -30px;
    }
    
    .box-image .images img {
        width: calc(20% - 30px);
        margin-left: 30px;
        margin-bottom: 30px;
        border-radius: 5px;
        height: 350px;
        object-fit: cover;
    }
</style>
    `