interface SanityBody{
_createdAt: string;
_id: string;
_rev: string;
_updatedAt: string;
}

interface Image {
    _type:'image';
    asset:{
        _ref: string;
        _type: 'reference'
    }
}

export interface social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}