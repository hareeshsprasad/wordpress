<?php
session_start();
// Check if ABSPATH is defined to prevent direct access
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class Custom_Price_calculation
{
    public static function set_rent_amount($price)
    {
        $data = isset($_SESSION['data']) ? $_SESSION['data'] : [];
        $rent_from = isset($data['rent_from']) ? $data['rent_from'] : '';
        $rent_to = isset($data['rent_to']) ? $data['rent_to'] : '';
        $rent_from_date = new DateTime($rent_from);
        $rent_to_date = new DateTime($rent_to);
        $interval = $rent_from_date->diff($rent_to_date);
        $interval = $interval->days + 1;
        $total_rent_amount = $price * $interval;
        return $total_rent_amount;
    }
}
