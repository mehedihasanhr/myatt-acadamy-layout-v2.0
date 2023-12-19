export type Teacher = {
  id: string | number;
  name: string;
  image: string;
  shift: string;
  flag: string;
  message: string;
  shift_title?: string;
};

export type Staff = {
  id: string | number;
  name: string;
  image: string;
  flag: string;
  team: string;
  dept?: string;
  post?: string;
};

export type Notice = {
  date: string;
  type: string;
  message: string;
};

// Auth Types
export interface SigninFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  role: number;
  phone_number?: any;
  address?: any;
  image?: any;
  avatar?: any;
  forgot_token?: any;
  provider_id?: any;
  created_at: string;
  updated_at: string;
  last_login_at: string;
  user_type: number;
  country_id: number;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: UserData;
  token: string;
}


// grades 
export interface Grade {
  id: number | string,
  uuid: string;
  name: string;
  image?:string;
  is_featured: 'yes' | 'no';
  slug: string;
  status: 0 | 1;
  created_at: string;
  updated_at: string;
  subcategories?: GradeSubcategory[];
}

export type GradeSubcategory = {
  id: number | string;
  uuid: string;
  category_id: number | string;
  name: string;
  slug: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export type Country = {
  id: number | string;
  short_name: string;
  country_name: string;
  flag: string;
  slug: string;
  phonecode: string;
  continent: string;
  created_at: string;
  updated_at: string; 
}


// Cart submit form data Type
export type CartSubmitDataType = {
    name: string, 
    email: string,
    payment_method: 'paypal' | 'stripe' | string,
    country_id: string,
    phone_number: string,
    total_price: number,
    order_items: {
      category_id: number,
      subcategory_id: number,
      unit_price: number
    }[]
}