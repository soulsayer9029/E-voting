const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dhruv:hello@cluster0.uv9st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})