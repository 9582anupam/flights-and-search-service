const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
            data : response,
            success: true,
            message: 'City created successfully',
            err : {}
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message: 'Not Able to create city',
            err : error
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await cityService.destroy(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message: 'City deleted successfully',
            err : {}
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success: false,
            message: 'Not Able to delete city',
            err : error
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "City updated successfully",
            err : {}
        });
    }
    catch (error) {
        console.log(error)
        return res.response(500).json({
            data : {},
            success : false,
            message : "Not able to update city",
            error : error
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Data Fetched Successfully",
            error : {}
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fetch city",
            error : error
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    get
}