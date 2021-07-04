export interface Request {
  user_id: string;
  sitter_id: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
}

export interface RequestApiData {
  success?: string;
  error?: string;
  requestId?: string;
}