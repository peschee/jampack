export type Options = {
    image : {
        embed_size: number;
        srcset_min_width: number;
        srcset_max_width: number;
    }
}

const default_options : Options = {
    image : {
        embed_size: 800,
        srcset_min_width: 640*2,
        srcset_max_width: 5120
    }
}

export default default_options;
