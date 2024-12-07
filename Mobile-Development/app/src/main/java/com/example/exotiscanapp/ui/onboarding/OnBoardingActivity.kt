package com.example.exotiscanapp.ui.onboarding

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.NavController
import androidx.navigation.fragment.NavHostFragment
import com.example.exotiscanapp.R
import com.example.exotiscanapp.databinding.ActivityOnBoardingBinding

class OnBoardingActivity : AppCompatActivity() {
    private lateinit var binding: ActivityOnBoardingBinding
    private lateinit var navController: NavController
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        binding = ActivityOnBoardingBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Inisialisasi NavHostFragment dan NavController
        val navHostFragment = supportFragmentManager.findFragmentById(R.id.nav_host_fragment) as NavHostFragment
        navController = navHostFragment.navController

        supportActionBar?.hide()

    }
}