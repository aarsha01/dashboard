import marquee from '../model/marquee.model.js'

async function addMarquee(req, res) {
  try {
    if (!req.body) {
      return res.status(500).json({ status: 'Error', message: err })
    }
    const marqueedata = new marquee(req.body)
    await marqueedata.save()
    res.status(200).json({ status: 'Success', message: "Data added succesfully" })
  } catch (err) {
    res.status(500).json({ status: 'Error', message: err })
  }
}

async function fetchMarquee(req, res) {
  try {
    const query = { "EndDate": { $gte: new Date() } }
    const marquees = await marquee.find(query);
    res.status(200).json({ status: 'Success', data: marquees })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'Error', message: err })
  }
}

async function fetchAllMarquees(req, res) {
  try {
    const marquees = await marquee.find();
    res.status(200).json({ status: 'Success', data: marquees })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'Error', message: err })
  }
}

async function fetchMarqueeById(req, res) {
  try {
    const { id } = req.body
    const marqueeDoc = await marquee.findById(id);
    res.status(200).json({ status: 'Success', data: marqueeDoc })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'Error', message: err })
  }
}

export {
  addMarquee, fetchMarquee, fetchAllMarquees, fetchMarqueeById
}